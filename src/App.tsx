import {
  ApartmentOutlined,
  ArrowRightOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import { Card } from "antd";
import Logo from "../src/assets/carina-pires.png";

const { Meta } = Card;

function App() {
  return (
    <S.Body>
      <S.Header>
        <S.Container>
          <S.Hero>
            <S.HeroImage src={Logo} alt="Logo" />
            <S.StyledTitle>
              Se você foi vítima de golpes financeiros acima de R$2.500,00,
              conheça as opções legais para pleitear a recuperação dos valores
            </S.StyledTitle>
            <S.StyledText>
              A súmula 479 do STJ atribui aos Bancos a responsabilidade por
              golpes financeiros envolvendo transferências de dinheiro entre
              contas bancárias
            </S.StyledText>
            <S.StyledText>
              Se você se encontrar nessa situação, leia o CONTEÚDO INFORMATIVO
              DESTA PÁGINA
            </S.StyledText>
            <S.WhatsAppButton type="primary" href="https://wa.me/989288588">
              FALAR DIRETAMENTE COM UM ADVOGADO
            </S.WhatsAppButton>
          </S.Hero>
        </S.Container>
      </S.Header>
      <S.Container>
        <S.List>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Você pode ter Direito a restituir o seu dinheiro
            </S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              O Banco pode ser responsabilizado, você protegido.
            </S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>Você pode ter Direito a indenização.</S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Converse conosco que lhe ajudaremos a entender e lutar pelos seus
              Direitos
            </S.ListText>
          </S.ListItem>
        </S.List>
        <S.MarketingTitle>
          COMO PODEMOS LHE AJUDAR NESSE MOMENTO?
        </S.MarketingTitle>
        <S.MarketingSubtitle>
          Assessoria Jurídica Especializada em Direito Bancário com Ênfase no
          combate contra Fraudes Online
        </S.MarketingSubtitle>
        <S.CardsContainer>
          <S.StyledCard
            cover={
              <ApartmentOutlined style={{ color: "red", fontSize: "50px" }} />
            }
          >
            <Meta
              title="Metodologia Estratégica:"
              description="O nosso diferencial reside na implementação de uma metodologia estratégica completa. Antes mesmo de consultar nosso advogado, realizamos uma análise minuciosa. Esse procedimento é essencial para a coleta de provas substanciais e, assim, aumentar significativamente as probabilidades de sucesso em seu caso."
            />
          </S.StyledCard>

          <S.StyledCard
            cover={
              <ProductOutlined style={{ color: "red", fontSize: "50px" }} />
            }
          >
            <Meta
              title="Advocacia Personalizada:"
              description="Nossa abordagem é centrada na prestação de assistência personalizada, considerando fatores como empatia e resolução. Buscamos não apenas ajudar a recuperar o seu dinheiro, mas também promover o seu direito."
            />
          </S.StyledCard>
        </S.CardsContainer>
        <S.WhatsAppButton type="primary" href="https://wa.me/989288588">
          FALAR DIRETAMENTE COM UM ADVOGADO
        </S.WhatsAppButton>
      </S.Container>
      <S.Footer>
        <S.Container>
          <S.FooterImage src={Logo} alt="Logo" />
          <S.FooterItem>
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo. Trabalhamos exclusivamente com serviços jurídicos.
          </S.FooterItem>
          <S.FooterItem>
            Copyright © 2024 Carina Pires - Advocacia. Todos os direitos
            reservados.
          </S.FooterItem>
          <S.FooterItem>OAB/SP n° 503.201</S.FooterItem>
        </S.Container>
      </S.Footer>
    </S.Body>
  );
}

export default App;
