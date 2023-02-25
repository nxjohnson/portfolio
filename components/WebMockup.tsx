import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Work.module.css';

interface Images {
  src: StaticImageData,
  alt: string,
}

interface Props {
  images: Images[];
}

export default function WebMockup({ images }: Props): JSX.Element {
  return (
    <div className={styles.webMockupContainer}>
      <div className={styles.browserMockup}>
        <div className={styles.browserMockupImage}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}