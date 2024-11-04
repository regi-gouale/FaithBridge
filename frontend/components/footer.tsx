export const Footer = () => {
  return (
    <footer className="sticky bottom-0 mx-auto flex w-full items-center justify-center border-t bg-neutral-50 p-4 text-center font-body text-sm text-muted-foreground">
      <p>
        &copy; 2024 FaithBridge. All rights reserved. |{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
      </p>
    </footer>
  );
};
