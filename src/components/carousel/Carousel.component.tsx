import Image from "next/image";

function Carousel() {
  const images = [
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1713468171/premiun/logos/grasseetto_pkzmgb.jpg",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1713222900/premiun/logos/ug_oxeasj.jpg",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1713468063/premiun/logos/cagnoli_qc4vui.jpg",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1713222828/premiun/logos/Cat%C3%A1logo-Inal_compressed_ygpvtd-1_page-0001_yrs1y5.jpg",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1713883961/premiun/logos/silencio_nmqmey.jpg",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714081074/premiun/logos/Screenshot_2024-04-25_183548_b70ifu.png",
    "https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714081902/premiun/logos/Screenshot_2024-04-25_185112_pwfypn.png",
  ];

  return (
    <div
      className="w-auto inline-flex flex-nowrap overflow-hidden lg:mb-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 128px, black calc(100% - 200px), transparent)",
      }}
    >
      <ul className="flex items-center justify-center md:justify-start mx-8 max-w-none animate-infinite-scroll space-x-14">
        {images.map((src, index) => (
          <li key={index} className="flex-none">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              width={80}
              height={80}
            />
          </li>
        ))}
        {images.map((src, index) => (
          <li key={index} className="flex-none">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              width={80}
              height={80}
            />
          </li>
        ))}
        {images.map((src, index) => (
          <li key={index} className="flex-none">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              width={80}
              height={80}
            />
          </li>
        ))}
        {images.map((src, index) => (
          <li key={index} className="flex-none">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              width={80}
              height={80}
            />
          </li>
        ))}
        {images.map((src, index) => (
          <li key={index} className="flex-none">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              width={80}
              height={80}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
