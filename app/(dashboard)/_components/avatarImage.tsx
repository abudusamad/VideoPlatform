import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarImgProps {
  src?: string | undefined | null;
  alt?: string;
  onClick?: () => void;
  className?: string;
}

export const AvatarImg = ({ src, alt, onClick, className }: AvatarImgProps) => {
  return (
    <Avatar onClick={onClick}>
      <AvatarImage
        src={
          src ||
          "https://miro.medium.com/v2/resize:fill:64:64/1*dmbNkD5D-u45r44go_cf0g.png"
        }
        alt={alt}
        className={className}
      />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};
