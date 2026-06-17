const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export async function cycleTypewriter(textNode: Text, titles: string[]): Promise<void> {
  if (titles.length === 1) {
    for (let i = 0; i <= titles[0].length; i++) {
      textNode.textContent = titles[0].slice(0, i);
      await sleep(80);
    }
    return;
  }

  let idx = 0;
  while (true) {
    const title = titles[idx];

    for (let i = 0; i <= title.length; i++) {
      textNode.textContent = title.slice(0, i);
      await sleep(80);
    }

    await sleep(2200);

    for (let i = title.length; i >= 0; i--) {
      textNode.textContent = title.slice(0, i);
      await sleep(40);
    }

    await sleep(300);
    idx = (idx + 1) % titles.length;
  }
}
