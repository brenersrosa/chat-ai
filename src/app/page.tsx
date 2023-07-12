'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AiOutlineSend } from 'react-icons/ai'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="grid h-[720px] w-[540px] grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-row-reverse gap-3 text-sm text-slate-50">
            <Avatar>
              <AvatarFallback>BR</AvatarFallback>
              <AvatarImage src="https://github.com/brenersrosa.png" />
            </Avatar>

            <div className="relative rounded-lg bg-slate-500 p-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                dolorum aliquid eius, quibusdam illo placeat cumque quidem
                libero ad unde magnam, delectus aperiam nisi beatae ex vel velit
                nemo soluta!
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-sm text-slate-50">
            <Avatar>
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>

            <div className="relative rounded-lg bg-slate-500 p-4">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                dolorum aliquid eius, quibusdam illo placeat cumque quidem
                libero ad unde magnam, delectus aperiam nisi beatae ex vel velit
                nemo soluta!
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit" className="bg-slate-600">
            <AiOutlineSend className="h-6 w-6" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
