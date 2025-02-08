'use client';
import Background_text from "@/components/background_text";


export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Background_text background_text={"Loading"}/>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-warm-600"></div>
    </div>
  );
}
