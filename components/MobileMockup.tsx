import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Work.module.css';

interface Images {
  src: StaticImageData,
  alt: string,
}

interface Props {
  images: Images[];
}

export default function MobileMockup({ images }: Props): JSX.Element {
  return (
    <div className = {styles.mobileMockupContainer}>
          {images.map((image) => {
            return (
              <div className={styles.mobileMockup} key={image.alt}>
                <div className={styles.mobileMockupImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                  />
                </div>
              </div>
            )
          })}
        </div>
  )
}