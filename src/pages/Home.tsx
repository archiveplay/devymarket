import "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FlexBoxRow, FlexBoxCol } from '@/components/styled/styled';
import { useTonConnect } from '@/hooks/ton/useTonConnect';
import { WalletInfo } from "@/components/ui/wallet/WalletInfo";
import {
  Application
} from '@pixi/react';
import { BunnySprite } from "@/components/pixi/BunnySprite"

export const Home = () => {
  const { wallet, connected } = useTonConnect();

  return (
    <FlexBoxCol>
      <FlexBoxRow>
        <Application>
          <BunnySprite />
        </Application>
      </FlexBoxRow>
      <FlexBoxRow>
        <TonConnectButton />
      </FlexBoxRow>
      {wallet && connected && (
        <FlexBoxRow>
          <WalletInfo address={wallet} />
        </FlexBoxRow>
      )}
    </FlexBoxCol>
  )
}
