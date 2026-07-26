import api from "@/api/axios";

import type { Resume } from "@/types/resume";

export async function getResume() {
  const response =
    await api.get<Resume>("/resume");

  return response.data;
}

export async function uploadResume(
  file: File,
) {
  const formData = new FormData();

  formData.append("file", file);

  const response =
    await api.post<Resume>(
      "/resume",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      },
    );

  return response.data;
}

export async function deleteResume() {
  await api.delete("/resume");
}

export async function downloadResume() {
  const response = await api.get(
    "/resume/download",
    {
      responseType: "blob",
    },
  );

  const url = window.URL.createObjectURL(
    response.data,
  );

  const link =
    document.createElement("a");

  const disposition =
    response.headers["content-disposition"];

  let fileName = "resume.pdf";

  if (disposition) {
    const match =
      disposition.match(
        /filename="(.+)"/,
      );

    if (match) {
      fileName = match[1];
    }
  }

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  link.remove();

  window.URL.revokeObjectURL(url);
}