interface ShotDef {
  file: string;
  label: string;
  note?: string;
}

// Function to build the array of screenshots for the carousel to use
export function buildShots(project: string, folder: string, files: ShotDef[]) {
  return files.map(({ file, label, note }) => ({
    src: `/projects/${project}/${folder ? `${folder}/` : ''}${file}.png`,
    label,
    ...(note && { note }),
  }));
}
