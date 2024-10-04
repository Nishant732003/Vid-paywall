import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <iframe src="https://iframe.mediadelivery.net/embed/320480/bf3aa1b6-f5e9-427a-a623-e18abcb977ee?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{
            border: 0,
            position: "absolute",
            height: "100%",
            top: 0,
           width:"100%",
            
            
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen={true}>
        </iframe>
      
    </main>
  );
}
