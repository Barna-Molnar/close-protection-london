import Logo from "../Logo";

export default function LogoExample() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Full Logo</p>
        <Logo variant="full" />
      </div>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Compact Logo</p>
        <Logo variant="compact" />
      </div>
    </div>
  );
}
