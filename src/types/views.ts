export interface CourseRegister {
  title: string;
  description: string;
  price: string;
  duration: string;
  videoLink: string;
  thumbnail: File | null | string;
}

export interface CourseProps {
  data: {
    _id: string;
    createdBy: {
      _id: string;
      name: string;
      profilePicture: string;
    };
    description: string;
    duration: string;
    price: number;
    title: string;
    videoLink: string;
  };
}
