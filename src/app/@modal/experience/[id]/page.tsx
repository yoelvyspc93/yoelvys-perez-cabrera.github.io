'use client';

import { ExperienceModal } from "@/components/common/ExperienceModal";
import { Modal } from "@/components/common/Modal";
import { experience } from "@/constants/experience";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ExperiencePage({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);

  const exp = experience.find((exp) => exp.number === id);

  console.log({ exp });

  if (!exp) return notFound();

  return <Modal isOpen onClose={() => router.back()} title={exp?.title}>
    <ExperienceModal {...exp} />
  </Modal>
}