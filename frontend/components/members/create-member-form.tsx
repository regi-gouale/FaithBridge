import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createMemberFormSchema = z.object({
  firstname: z.string().min(1, "Le nom est obligatoire"),
  lastname: z.string().min(1, "Le prénom est obligatoire"),
  gender: z.enum(["MALE", "FEMALE"]),
  email: z.string().email(),
  dateOfBirth: z
    .date()
    .min(new Date("01/01/1900"), "La date de naissance est obligatoire"),
  phoneNumber: z.string(),
});

export const CreateMemberForm = () => {
  // const [date, setDate] = useState<Date | null>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof createMemberFormSchema>>({
    resolver: zodResolver(createMemberFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      gender: "MALE",
      email: "",
      phoneNumber: "",
      dateOfBirth: new Date("01/01/1990"),
    },
  });

  function onSubmit(data: z.infer<typeof createMemberFormSchema>) {
    // Vérifier que le membre n'existe pas dans la base de données avec Prisma. S'il existe dasn la base de données, envoyer un toast avec un message d'erreur. S'il n'existe pas le créer dasn la base de données puis faire un toast informatif
    toast({
      title: "Membre créé",
      description: "Le nouveau membre a été ajouté.",
    });
    console.log(data);
  }

  return (
    <div className="flex">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-4 mb-4 w-full space-y-4"
        >
          <div className="grid w-full grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexe</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir le sexe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="MALE">Homme</SelectItem>
                      <SelectItem value="FEMALE">Femme</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="grid gap-0 py-2">
                <div className="grid grid-cols-1 items-center gap-4">
                  <FormLabel>Date de naissance</FormLabel>
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
                            format(field.value, "PPP", { locale: fr })
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="flex w-auto flex-col space-y-2 p-2"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          return (
                            date > new Date() || date < new Date("01/01/1990")
                          );
                        }}
                        captionLayout="dropdown-buttons"
                        defaultMonth={field.value || new Date()}
                        fromYear={1900}
                        toYear={new Date().getFullYear()}
                        locale={fr}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="jdoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="06 01 02 03 04" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            {/* <Button variant={"outline"} className="font-heading font-semibold">
              Annuler
            </Button> */}
            <div></div>
            <Button
              type="submit"
              className="col-span-1 font-heading font-semibold"
            >
              Ajouter
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
