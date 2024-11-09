"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

const createInterviewReportFormSchema = z.object({
  interviewDate: z.date({
    required_error: "Please enter the date of the interview.",
  }),
  firstInterviewerId: z.string().uuid(),
  secondInterviewerId: z.string().uuid().optional(),
  candidateId: z.string().uuid(),
  interviewType: z.enum(["phone", "onsite"]),
});

export const CreateInterviewReportForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof createInterviewReportFormSchema>>({
    resolver: zodResolver(createInterviewReportFormSchema),
    defaultValues: {
      interviewDate: new Date(),
      firstInterviewerId: "",
      secondInterviewerId: "",
      candidateId: "",
      interviewType: "phone",
    },
  });

  function onSubmit(data: z.infer<typeof createInterviewReportFormSchema>) {
    toast({
      title: "Interview Report Created",
      description: `The interview report for the interview on ${data.interviewDate.toDateString()} has been created.`,
    });
  }

  return (
    <div className="my-4 flex flex-1 flex-col gap-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-4 max-w-xl space-y-8"
        >
          <FormField
            control={form.control}
            name="interviewDate"
            render={({ field }) => (
              <FormItem className="grid gap-0 py-2">
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 col-span-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", {
                              locale: enGB,
                            })
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          return date < new Date();
                        }}
                        // initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormDescription className="text-right text-xs">
                  Please enter the date of the interview in the format
                  YYYY-MM-DD.
                </FormDescription>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Create Interview Report</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
