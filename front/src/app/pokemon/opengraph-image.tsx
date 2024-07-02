import {ImageResponse} from "next/og";

export const alt = "My pokemon page";
export const size = {
  width: 900,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC10gnC1jUkanwprn1gSdrpWICS8NgCQp0qQ&s" />
      </div>
    ),
    {
      ...size,
    }
  );
}
