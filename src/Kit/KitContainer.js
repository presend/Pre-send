import styled from 'styled-components';

const ProductCardPictureContainer = styled.div`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
`;

const SectionContainer = styled.div`
    padding: 1rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(44,44,45,.07), inset 0 0 0 1px rgba(44,44,45,.07);
    margin: 16px;
`;

export {ProductCardPictureContainer, SectionContainer};