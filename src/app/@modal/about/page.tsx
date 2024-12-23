'use client';

import { AboutModal } from "@/components/common/AboutModal";
import { Modal } from "@/components/common/Modal";
import { useRouter } from "next/navigation";


export default function AboutPage() {
  const router = useRouter();

  return <Modal isOpen onClose={() => router.back()} title="About">
    <AboutModal />
  </Modal>
}