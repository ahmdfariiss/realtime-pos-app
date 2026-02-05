'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { INITIAL_LOGIN_FORM } from '@/constants/auth-constant';
import { LoginForm, loginSchema } from '@/validations/auth-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema), //resolver diambil dari login schema
    defaultValues: INITIAL_LOGIN_FORM,
  }); //tipe dari usForm diambil dari auth-validation

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Selamat Datang</CardTitle>
        <CardDescription>Silahkan login untuk akses web</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          {' '}
          {/* props untuk Form diambil dari form */}
          <form action="" onSubmit={onSubmit} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field: { ...rest } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...rest}
                      type="email"
                      placeholder="Silahkan masukan email..."
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field: { ...rest } }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...rest}
                      type="password"
                      placeholder="Masukan Password"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            ></FormField>
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
