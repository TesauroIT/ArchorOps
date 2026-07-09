import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";
import { ConsumptionPanel } from "@/components/consumption-panel";
import { getServerI18n } from "@/lib/i18n/server";
import { interpolate } from "@/lib/i18n/config";

export default async function ConsumptionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const environment = await prisma.environment.findUnique({
    where: { id },
    include: { tenant: true },
  });
  if (!environment) notFound();

  const { dict } = await getServerI18n();
  const t = dict.consumption;

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader
          title={interpolate(t.detailTitle, { tenant: environment.tenant.name, name: environment.name })}
          description={t.detailDescription}
          action={
            <Link
              href={`/environments/${environment.id}`}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <ArrowLeft className="size-4" />
              {t.backToEnv}
            </Link>
          }
        />
        <ConsumptionPanel environmentId={environment.id} />
      </div>
    </AppShell>
  );
}
