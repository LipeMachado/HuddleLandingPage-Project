import {
    Header,
    HeaderContainerDiv,
    HeaderLogoDiv,
    LogoHuddleImg
} from './style';

import logoHuddle from '../../Assets/logo.svg';

export function HeaderSection() {
    return (
        <>
            <Header>
                <HeaderContainerDiv>
                    <HeaderLogoDiv>
                        <LogoHuddleImg src={logoHuddle} alt="" />
                    </HeaderLogoDiv>
                </HeaderContainerDiv>
            </Header>
        </>
    );
}