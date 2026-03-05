"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import NameHeader from "./NameHeader";
import Chat from "./Chat";
import InputMessage from "./InputMessage";
import { useSocket } from "@/hooks/use-socket";
import { chatMessageType } from "@/lib/interface-types";
import { useGetProfileQuery } from "@/store/api/profileApi";
import { useAppDispatch } from "@/store/hooks";
import { setProfile } from "@/store/profileSlice";

const ADMIN_ID = "Q5jvPEYY22YTV1Ut3kROw"; // Admin ID for chat

function Messages() {
  const [messages, setMessages] = useState<chatMessageType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [otherUserDetails, setOtherUserDetails] = useState<any>(null);

  const token = Cookies.get("authToken");
  const { sendMessage, onNewMessage } = useSocket(token);
  const dispatch = useAppDispatch();
  
  // Fetch profile data to populate avatar in Redux
  const { data: profileData } = useGetProfileQuery();
  const cdnURL = process.env.NEXT_PUBLIC_STORAGE_BUCKET || "";

  // Helper function to construct proper avatar URL
  const getAvatarUrl = (avatarPath: string | null | undefined): string | null => {
    if (!avatarPath) return null;
    
    // If it's already a complete URL, return as is
    if (avatarPath.startsWith('http://') || avatarPath.startsWith('https://')) {
      return avatarPath;
    }
    
    // Clean up the path - remove leading slashes
    const cleanPath = avatarPath.replace(/^\/+/, '');
    
    // Return the properly constructed URL
    return `${cdnURL}/${cleanPath}`;
  };

  // Sync fetched profile data to Redux state
  useEffect(() => {
    if (profileData) {
      const avatarUrl = getAvatarUrl(profileData.avatar);
      const updatedProfile = {
        ...profileData,
        avatar: avatarUrl,
      };
      dispatch(setProfile(updatedProfile));
    }
  }, [profileData, dispatch]);

  // Fetch chat history on mount
  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!token) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/message/${ADMIN_ID}/chat-history`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();

        setOtherUserDetails(data.data.otherUserDetails || { name: "Admin", avatar: null });

        setMessages(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (data.data.messages || []).map((msg: any) => ({
            id: msg.id || Date.now().toString(),
            conversationId: msg.conversationId || "",
            isOtherUserMessage: msg.isOtherUserMessage,
            message: msg.message,
            createdAt: msg.createdAt || new Date().toISOString(),
            hasRead: msg.hasRead ?? false,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch chat history:", err);
      }
    };
    fetchChatHistory();
  }, [token]);

  // Listen for new socket messages

  useEffect(() => {
    const currentUserId = Cookies.get("userId");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleNewMessage = (data: any) => {
      if (!data) return;

      if (data.fromUserId === ADMIN_ID || data.toUserId === ADMIN_ID) {
        setMessages((prev) => {
          if (prev.find((m) => m.id === data.id)) return prev; // prevent duplicate
          return [
            ...prev,
            {
              ...data,
              isOtherUserMessage: data.fromUserId !== currentUserId,
            } as chatMessageType,
          ];
        });
      }
    };

    onNewMessage(handleNewMessage);
  }, [onNewMessage]);

  const addMessage = (msg: chatMessageType) => {
    setMessages((prev) => {
      if (prev.find((m) => m.id === msg.id)) return prev;
      return [...prev, msg];
    });
  };

  return (
    <div className="flex-grow flex flex-col h-[calc(100vh-3.5rem)]">
      <NameHeader />
      <Chat messages={messages} otherUserDetails={otherUserDetails} />
      <InputMessage userId={ADMIN_ID} addMessage={addMessage} sendMessage={sendMessage} />
    </div>
  );
}

export default Messages;