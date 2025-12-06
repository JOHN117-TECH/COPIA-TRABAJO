"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/utilities/constants";

import RelatedProjectsMovile from "./RelatedProjectsMovile";
import RelatedProjectsDesktop from "./RelatedProjectsDesktop";

function RelatedProjects() {
  const t = useTranslations("Markets");

  return (
    <section className="py-12">
      <h2 className="md:text-center mx-4 text-left text-xl font-semibold text-(--spg-primary) mb-4">
        {t("relatedProjects")}
      </h2>

      {/* Desktop layout */}
      <RelatedProjectsDesktop projects={projects} />

      {/* Mobile layout (slider) */}
      <RelatedProjectsMovile projects={projects} />
    </section>
  );
}
export default RelatedProjects;