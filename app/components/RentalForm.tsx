'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const schema = z.object({
  pickupLocation: z.string().min(1, "Required"),
  dropoffLocation: z.string().min(1, "Required"),
});

type FormData = z.infer<typeof schema>;

export default function RentalForm() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <Input {...register("pickupLocation")} placeholder="Pick-Up Location" />
      <Input {...register("dropoffLocation")} placeholder="Drop-Off Location" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
