"use client";

import { newCdcAction } from "@/actions/newCdc";
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
import { NewCdcSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";

interface Props {
  client: {
    id: string;
    number: string;
    companyName: string;
    companyDescription: string;
    contactName: string;
    contactEmail: string;
    contactPhoneNumber: string;
  } | null;
}

export const NewCdcForm: React.FC<Props> = ({ client }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof NewCdcSchema>>({
    resolver: zodResolver(NewCdcSchema),
    defaultValues: {
      number: client?.number + "C",
      title: "",
      objectif: "",
      publicVise: "",
      personas: "",
      fonctionnalites: "",
      structure: "",
      charteGraphique: "",
      maquette: "",
      technologie: "",
      delais: "",
      hebergement: "",
      maintenance: "",
      evolution: "",
      budget: "",
      client: client?.id,
    },
  });

  function onSubmit(values: z.infer<typeof NewCdcSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    startTransition(() => {
      newCdcAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    router.push(`/clients/${client?.id}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-5">
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro</FormLabel>
              <FormControl>
                <Input
                  placeholder="name"
                  {...field}
                  disabled={isPending}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="objectif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objectif</FormLabel>
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
        <FormField
          control={form.control}
          name="publicVise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Public</FormLabel>
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
        <FormField
          control={form.control}
          name="personas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personna</FormLabel>
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
        <FormField
          control={form.control}
          name="fonctionnalites"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fonctionnalité</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="structure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Structure</FormLabel>
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
        <FormField
          control={form.control}
          name="charteGraphique"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Charte graphique</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maquette"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maquette</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="technologie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologie</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hebergement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hébergement</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maintenance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maintenance</FormLabel>
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
        <FormField
          control={form.control}
          name="evolution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Evolution</FormLabel>
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
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delais"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Délais</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} disabled={isPending} />
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
