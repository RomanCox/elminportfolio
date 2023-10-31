import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {Title} from '../../components/title';

import animationInteriorsPNG from '../../assets/images/services/3dAnimationInteriors.png';
import animationInteriorsWEBP from '../../assets/images/services/3dAnimationInteriors.webp';
import animationObjectsPNG from '../../assets/images/services/3dAnimationObjects.png';
import animationObjectsWEBP from '../../assets/images/services/3dAnimationObjects.webp';
import modelingArchitecturePNG from '../../assets/images/services/3dModelingArchicture.png';
import modelingArchitectureWEBP from '../../assets/images/services/3dModelingArchicture.webp';
import modelingObjectsPNG from '../../assets/images/services/3dModelingObjects.png';
import modelingObjectsWEBP from '../../assets/images/services/3dModelingObjects.webp';
import visualizationObjectsPNG from '../../assets/images/services/3dVisualizationObjects.png';
import visualizationObjectsWEBP from '../../assets/images/services/3dVisualizationObjects.webp';
import architecturalVisualizationPNG from '../../assets/images/services/architecturalVisualization.png';
import architecturalVisualizationWEBP from '../../assets/images/services/architecturalVisualization.webp';
import interactiveWalkthroughPNG from '../../assets/images/services/interactiveWalkthrough.png';
import interactiveWalkthroughWEBP from '../../assets/images/services/interactiveWalkthrough.webp';
import vrPNG from '../../assets/images/services/vr.png';
import vrWEBP from '../../assets/images/services/vr.webp';


import {
    ContextContainerStyled,
    DescriptionContainerStyled,
    ImageStyled,
    ServiceContainerStyled,
    ServiceDescriptionStyled,
    ServiceLabelStyled,
    ServicesPageContainerStyled,
    ServiceTitleStyled,
    TitleContainerStyled,
} from './ServicesPage.styled.ts';

const ServicesPage = () => {
    const services = [
        {
            id: 0,
            title: '3D Modelling',
            label: 'Objects',
            description: [
                '3D modelling of objects, furniture.',
                'Modelling of light and complex shapes.',
                'Creating highly detailed and realistic renders for catalogs, web sites, advertising and etc.',
            ],
            imagePNG: modelingObjectsPNG,
            imageWEBP: modelingObjectsWEBP,
            alt: '3d modelling image'
        },
        {
            id: 1,
            title: '3D Modelling',
            label: 'Architectures',
            description: [
                '3D modelling of architectural forms according to your drawings, schemes, references.',
                'Creating of a high quality 3D model.',
            ],
            imagePNG: modelingArchitecturePNG,
            imageWEBP: modelingArchitectureWEBP,
            alt: '3d modelling architecture'
        },
        {
            id: 2,
            title: '3D Visualization',
            label: 'Objects',
            description: [
                'Realistic visualization for your purposes in high quality.',
                'Object visualization with high and low detail.',
            ],
            imagePNG: visualizationObjectsPNG,
            imageWEBP: visualizationObjectsWEBP,
            alt: '3d visualization objects image'
        },
        {
            id: 3,
            title: 'Architectural Visualisation',
            label: '',
            description: [
                'Visualization of interiors and exteriors  in high quality.',
                'Architectural visualization according to your references,  examples, desires and etc.',
            ],
            imagePNG: architecturalVisualizationPNG,
            imageWEBP: architecturalVisualizationWEBP,
            alt: 'architectural visualization image'
        },
        {
            id: 4,
            title: '3D Animation',
            label: 'Objects',
            description: [
                'I will create a video of your subject.',
                'Realistic video can be used for advertising, presentation posting on a web site.',
                'The video can be with music if Full HD, 2K or 4K resolution.',
            ],
            imagePNG: animationObjectsPNG,
            imageWEBP: animationObjectsWEBP,
            alt: '3d animation objects image'
        },
        {
            id: 5,
            title: '3D Animation',
            label: 'Interiors',
            description: [
                'I will create a video of your interior  for presentation, advertising and etc.',
                'In any  format and resolution.',
                'The result will be a realistic video in Full HD, 2K or 4K resolution.',
            ],
            imagePNG: animationInteriorsPNG,
            imageWEBP: animationInteriorsWEBP,
            alt: '3d animation interiors image'
        },
        {
            id: 6,
            title: 'Interactive walkthrough',
            label: '',
            description: [
                'I will create a project in Unreal Engine and pack it into  a video game.',
                'You will be able to walk around your interior, exterior or something else.',
                'You will be able to open doors, torn on and off lights and interact with objects.',
                'The result will be a project in EXE file format.',
            ],
            imagePNG: interactiveWalkthroughPNG,
            imageWEBP: interactiveWalkthroughWEBP,
            alt: 'interactive walkthrough image'
        },
        {
            id: 7,
            title: 'VR',
            label: '',
            description: [
                'I will create a VR project in Unreal Engine for your interior, exterior or something else.',
                'You will be able to put on virtual reality glasses and render there.',
                'You will be able to evaluate your project under a different view, which will give you a great feeling and a lot of information to implement ths project in life.',
            ],
            imagePNG: vrPNG,
            imageWEBP: vrWEBP,
            alt: 'vr image'
        },
    ];

    return (
        <ServicesPageContainerStyled>
            <Header/>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={'Services'}/>
            </TitleContainerStyled>
            <ContextContainerStyled>
                {services.map(service =>
                    <ServiceContainerStyled>
                        <picture>
                            <source type={'image/webp'} srcSet={service.imageWEBP}/>
                            <source type={'image/png'} srcSet={service.imagePNG}/>
                            <ImageStyled src={service.imagePNG} alt={service.alt} width={190} height={190}/>
                        </picture>
                        <DescriptionContainerStyled>
                            <ServiceTitleStyled>{service.title}</ServiceTitleStyled>
                            <ServiceLabelStyled>{service.label}</ServiceLabelStyled>
                            {service.description.map((description, index) =>
                                <ServiceDescriptionStyled key={description} $first={index === 0}>
                                    {description}
                                </ServiceDescriptionStyled>,
                            )}
                        </DescriptionContainerStyled>
                    </ServiceContainerStyled>,
                )}
            </ContextContainerStyled>
            <Footer/>
        </ServicesPageContainerStyled>
    );
};

export default ServicesPage;
