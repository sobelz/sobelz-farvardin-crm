import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { RiLogoutBoxLine } from "@remixicon/react";
import { useLogout } from "../hooks/useLogout";

const LogoutButton = ({ className }: { className?: string }) => {
  const { isPending, logoutHandler } = useLogout();

  return (
    <Dialog>
      <DialogTrigger>
        <Button className={className} disabled={isPending} type="button" variant="ghost">
          {isPending ? <Spinner /> : <RiLogoutBoxLine />}
          خروج
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>آیا میخواهید خارج شوید؟</DialogTitle>
        </DialogHeader>
        <DialogDescription>شما در حال خروج از حساب کاربری خود هستید </DialogDescription>
        <DialogFooter>
          <DialogClose>
            <Button>خیر</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="outline" onClick={logoutHandler}>
              بله
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutButton;
