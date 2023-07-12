'use client'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { AiOutlineSend } from 'react-icons/ai'
import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[540px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-6 pr-4">
          {messages.map((message) => {
            return (
              <>
                {message.role === 'assistant' ? (
                  <div className="flex gap-3 text-sm text-slate-50">
                    <Avatar>
                      <AvatarFallback>RS</AvatarFallback>
                      <AvatarImage src="https://github.com/rocketseat.png" />
                    </Avatar>

                    <div className="relative rounded-lg bg-slate-500 p-4">
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row-reverse gap-3 text-sm text-slate-50">
                    <Avatar>
                      <AvatarFallback>BR</AvatarFallback>
                      <AvatarImage src="https://github.com/brenersrosa.png" />
                    </Avatar>

                    <div className="relative rounded-lg bg-slate-500 p-4">
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}
              </>
            )
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="bg-slate-600">
            <AiOutlineSend className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
