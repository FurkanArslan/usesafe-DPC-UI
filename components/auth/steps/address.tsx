"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface AddressStepProps {
  form: UseFormReturn<any>;
}

export function AddressStep({ form }: AddressStepProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="address"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Headquarters Address *</FormLabel>
            <FormControl>
              <Textarea 
                {...field}
                className={cn(
                  fieldState.error && "border-red-500 focus-visible:ring-red-500"
                )}
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="city"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>City *</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  className={cn(
                    fieldState.error && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="district"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>District *</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  className={cn(
                    fieldState.error && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="postalCode"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input 
                {...field}
                className={cn(
                  fieldState.error && "border-red-500 focus-visible:ring-red-500"
                )}
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </div>
  );
}