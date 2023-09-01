import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: "white",
          width: "100%",
          padding: 3,

          borderRadius: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>A</span>
        <span style={{ color: "	#fd655d" }} className="text-secondary">
          A
        </span>
        <span className="text-secondary">A</span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
