import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/config/property";
import { getDict, localePath, type Locale } from "@/config/i18n";

function floorLabel(locale: Locale, floor: number): string {
  const t = getDict(locale);
  return floor === 1 ? t.common.floor1 : floor === 2 ? t.common.floor2 : t.common.floor3;
}

/** Room overview card (home page) — links to the room's anchor on /rooms. */
export default function RoomCard({ room, locale }: { room: Room; locale: Locale }) {
  const t = getDict(locale);
  const detail = t.rooms.detail[room.id];

  return (
    <Link
      href={`${localePath(locale, "/rooms")}#${room.id}`}
      className="group overflow-hidden rounded-2xl border border-molasses/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} — ${detail?.beds ?? ""}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="eyebrow">
          {floorLabel(locale, room.floor)} · {t.common.sleeps(room.sleeps)}
        </p>
        <h3 className="mt-1 font-display text-xl text-molasses">{room.name}</h3>
        <p className="mt-1 text-sm text-molasses-soft">{detail?.beds}</p>
      </div>
    </Link>
  );
}

export { floorLabel };
