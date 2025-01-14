"use client";

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { tachesAction } from "./tachesAction";
import { TachesSchema } from "./tachesSchema";

interface Props {}

export const ClientsForm: React.FC<Props> = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();
  const date = new Date();

  const form = useForm<z.infer<typeof TachesSchema>>({
    resolver: zodResolver(TachesSchema),
    defaultValues: {
      code: "",
      companyName: "",
      companyDescription: "",
      logo: "",
      adresse: "",
      postal: "",
      city: "",
      pays: "",
      telephone: "",
      email: "",
      date: date,
    },
  });

  function onSubmit(values: z.infer<typeof TachesSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      tachesAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    // router.push("/settings/caserne");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-5">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="dialogue"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit">Ajouter</Button>
      </form>
    </Form>
  );
};
