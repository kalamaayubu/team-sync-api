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

  // Join the team room
  socket.emit("join_team", "cmmwvvub20002qocp2tmg2vgd");

  // Rate exceeding test
  // console.log("🛡️ Starting Rate Limit Test (Sending 25 events)...");
  // for (let i = 0; i < 25; i++) {
  //   // We send a dummy event or repeat join_team
  //   socket.emit("join_team", "cmmwvvub20002qocp2tmg2vgd");
  // }
});

socket.on("error", (err) => {
  console.error("🚫 RATE LIMIT TRIGGERED:", err);
});

socket.on("connect_error", (err) => {
  console.error("🚫 CONNECTION ERROR:", err.message);
});

socket.on("notification:task_updated", (data) => {
  console.log("🚀 LIVE DATA RECEIVED:", data.message);
});
