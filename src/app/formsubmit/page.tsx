"use client";
import { CreateUserForm } from "@/components";
import { Box, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { postPing } from "../actions/mutation/_ping";

export default function Home() {
  const {
    data: pingPostData,
    isPending: pingPostIsPending,
    isSuccess: pingPostIsSuccess,
  } = useMutation({
    mutationKey: ["post-ping"],
    mutationFn: postPing,
  });

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Typography variant="h5">
          POST <code>/api/ping</code>
        </Typography>
        <CreateUserForm />
        <Typography variant="body1">
          <code>{JSON.stringify(pingPostData, null, 2)}</code>
        </Typography>
      </Box>
    </main>
  );
}
