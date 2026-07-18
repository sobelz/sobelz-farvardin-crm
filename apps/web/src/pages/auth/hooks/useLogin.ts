import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { LoginSchema } from "@sobelz-farvardin-crm/shared/validations";
import { useLoginMutate } from "@/hooks/mutations/auth";

export const useLogin = () => {
  const { mutateAsync, isPending } = useLoginMutate();
  const { handleSubmit, control } = useForm({
    resolver: valibotResolver(LoginSchema),
  });
  const onSubmit = handleSubmit(async (input) => {
    const { data } = await mutateAsync(input);
    console.log(data);
  });
  return {
    onSubmit,
    control,
    isPending,
  };
};
