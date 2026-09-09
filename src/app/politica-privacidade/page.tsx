import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade | Preventiva Norte',
    description: 'Política de Privacidade e Proteção de Dados da Preventiva Norte.',
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Política de Privacidade</h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    Na Preventiva Norte, comprometemo-nos a proteger e respeitar a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos os seus dados pessoais de acordo com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia e a legislação portuguesa vigente.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">1. Responsável pelo Tratamento</h2>
                <p>
                    Os dados pessoais recolhidos através deste website são da responsabilidade da Preventiva Norte.<br />
                    <strong>E-mail de contacto:</strong> comercial@preventivanorte.pt<br />
                    <strong>Telefone:</strong> 910 407 785<br />
                    Localização: Portugal (Prestamos serviço em todo o Norte de Portugal).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">2. Finalidade do Tratamento</h2>
                <p>Recolhemos e tratamos os seus dados pessoais com as seguintes finalidades:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Atendimento de pedidos:</strong> Para gerir as consultas, pedidos de orçamento ou informações enviadas através dos nossos formulários de contacto ou canais de comunicação (WhatsApp, e-mail, telefone).
                    </li>
                    <li>
                        <strong>Prestação de serviços:</strong> Para levar a cabo a instalação de redes de proteção e serviços contratados, incluindo a faturação e gestão administrativa.
                    </li>
                    <li>
                        <strong>Melhoria do serviço:</strong> Para analisar o uso da nossa web mediante cookies (ver secção de Cookies) e melhorar a experiência do utilizador.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">3. Legitimação</h2>
                <p>
                    A base legal para o tratamento dos seus dados é o seu <strong>consentimento explícito</strong> ao enviar um formulário de contacto ou aceitar os nossos cookies, assim como a <strong>execução de um contrato</strong> em caso de contratação dos nossos serviços.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">4. Destinatários dos Dados</h2>
                <p>
                    Os seus dados não serão cedidos a terceiros, salvo obrigação legal ou quando seja necessário para a prestação do serviço (por exemplo, empresas de transporte ou instaladores colaboradores, sempre sob acordos de confidencialidade).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">5. Direitos do Utilizador</h2>
                <p>Você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Aceder aos seus dados pessoais.</li>
                    <li>Retificar dados inexatos ou incompletos.</li>
                    <li>Solicitar a eliminação dos seus dados quando já não sejam necessários.</li>
                    <li>Opor-se ao tratamento ou solicitar a sua limitação.</li>
                    <li>Portabilidade dos seus dados.</li>
                </ul>
                <p className="mt-4">
                    Para exercer estes direitos, pode enviar um e-mail para <strong>comercial@preventivanorte.pt</strong> indicando o direito que deseja exercer.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">6. Segurança dos Dados</h2>
                <p>
                    Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra o acesso não autorizado, a perda ou a alteração.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">7. Uso de Cookies</h2>
                <p>
                    Este website utiliza cookies próprias e de terceiros para melhorar a navegação e obter dados estatísticos. Você pode configurar o seu navegador para rejeitar as cookies, embora isso possa afetar o funcionamento da web.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">8. Alterações na Política de Privacidade</h2>
                <p>
                    A Preventiva Norte reserva-se o direito de modificar esta política para a adaptar a novidades legislativas ou jurisprudenciais. Recomenda-se a sua leitura periódica.
                </p>

                <p className="text-sm text-slate-500 mt-12">
                    Última atualização: {new Date().toLocaleDateString('pt-PT')}
                </p>
            </div>
        </div>
    );
}
