export type Product = {
  id: number;
  slug: string;
  name: string;

  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  category: string;

  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;

  description: string;
  features: string;

  includes: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };

  others: {
    slug: string;
    name: string;
    image: ImageSet;
  }[];
};

type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};
