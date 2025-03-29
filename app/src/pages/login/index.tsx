import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'


export function Login() {
    return (
        <>
            <Helmet title='Login' />

            <div className='p-8'>
                <Button variant="outline" asChild className='absolute right-8 top-8 border border-gray-300'>

                    <Link to='/cadastrar'>Inscreva-se</Link>

                </Button>
            </div>

            <div className="p-8">
                 <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acesse a Plataforma de Cursos</h1>

                        <p className="text-sm text-gray-400">Fique por dentro dos ultimos cursos disponiveís na plataforma.</p>
                    </div>


                     <form className="space-y-4" >

                         <div className="space-y-2">
                            <Label>Seu e-mail</Label>
                             <Input className='border border-gray-300' id="email" type="email" />
                         </div>

                         <div className="space-y-2">
                             <Label>Sua Senha</Label>
                             <Input className='border border-gray-300' id="password" type="password" />
                         </div>

                         <Button
                             className="w-full  bg-gray-700 cursor-pointer text-white flex justify-center items-center gap-2"
                             type="submit"
                         >
                           Entrar
                         </Button>
                        <div className='flex justify-end'>
                            <span className='text-sm text-gray-400 hover:text-gray-800'>
                                <a href="#">Esqueceu sua senha?</a>
                            </span>
                        </div>
                     </form>
                 </div>
             </div>
        </>
    )
}