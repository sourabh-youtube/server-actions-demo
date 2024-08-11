import { initializeDb } from "@/server";
import { usersSchema } from "@/server/model";
import { IUser } from "@/server/model/users";
import { Box, Typography } from "@mui/material";
import { eq } from "drizzle-orm";

export default async function Home() {
  const getPingData = async (id: number = 0): Promise<IUser | undefined> => {
    "use server";
    const db = await initializeDb();
    const user = await db
      .select()
      .from(usersSchema)
      .where(eq(usersSchema.id, id));

    if (user.length > 0) return user[0];
  };

  const pingData = await getPingData(0);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography variant="h5">
          getPingData() emulating (GET) request
        </Typography>
        <br />
        <br />
        <pre style={{ backgroundColor: "beige", padding: 15 }}>
          <code style={{ fontSize: 20, color: "red" }}>
            {JSON.stringify(pingData, null, 4)}
          </code>
        </pre>
      </Box>
    </div>
  );
}
