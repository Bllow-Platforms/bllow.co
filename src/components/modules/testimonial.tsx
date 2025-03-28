import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// type Props = {};

const TestimonialCard = () => {
  return (
    <Card className="max-w-lg mx-auto shrink-0 shadow-lg">
      <CardContent className="">
        <p className="text-base text-foreground">
          Telex's user-centric approach is what sets them apart. The platform is
          intuitive and customizable, allowing us to tailor it to our specific
          workflows. The support team is also exceptional, always there to
          assist us whenever we need help
        </p>
      </CardContent>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Avatar>
          <AvatarImage
            src="https://s3-alpha-sig.figma.com/img/cfd8/66bc/315ae88e6ac095475cc309569103882b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d4fhkB6ASMSa6rORYtZm8SmaYg~AazrK0JKy-oeTuDBHHdhRzZ4ZNyi5ieuVzvprabwG0AYLtum~mmBilhe6LGfYvkxKkxDM-Jm01~VWXliHccaISKER7z4DVKRhDaovApFGoSZPzs6VXml6RlwRf~COz0Qp1pnkgmOuZYNeQqUEGuNHZsFL8KLItWL~E7Qoa3QttUeENq2CM5WMaWehw-9FvmMGtm5FfgjGWbEWdJW-NqBMfFlqZaJA1S7yipsSsW3D9bg72LvsnvhQVYuxZSgPCBHUc8DsynEOv2aDnhatEgkPXo8MQYbkSTOi27m-MFIWjQ3CoCPROYrA6cIK3w__"
            alt="Sarah Thompson"
          />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold">
            Sarah Thompson
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Company Ltd
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TestimonialCard;
