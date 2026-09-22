export const metadata = {
  title: 'Agreement admin | Alpath Engineering',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

export default function AdminLayout({ children }) {
  return <main style={{ maxWidth: 760, margin: '140px auto 80px', padding: 24 }}>{children}</main>;
}
