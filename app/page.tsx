import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">프레사 인 서울 명동</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
      FRESA INN MYEONGDONG EMPLOYEE HANDBOOK
      환영합니다! 프레사인 명동 프런트 직원을 위한 위키입니다 ! 🏆
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started - Tutorial
        </Link>
      </div>
    </div>
  )
}
