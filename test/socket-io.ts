import { io } from "socket.io-client";

// Create a connection to the server
const socket = io("http://localhost:8080", {
  auth: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtbXd2cWdicDAwMDNqM2NwczdnZzN4YnIiLCJlbWFpbCI6InBhdWxhNEBnbWFpbC5jb20iLCJpYXQiOjE3NzQ3ODgwNDksImV4cCI6MTc3NTM5Mjg0OX0.E2XnOVRv5p_LKfTTNeH2d0TRRNjlnnVAO1JAWEV56H0",
  },
});

socket.on("connect", () => {
  console.log("✅ CONNECTED | Socket ID:", socket.id);

  socket.emit("join_team", "cmmwvvub20002qocp2tmg2vgd");
});

socket.on("notification:task_updated", (data) => {
  console.log("🚀 LIVE DATA RECEIVED:", data.message);
});
