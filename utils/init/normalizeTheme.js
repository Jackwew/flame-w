const { readFile, writeFile } = require('fs/promises');

const normalizeTheme = async () => {
  // open main config file
  const configFile = await readFile('data/config.json', 'utf8');
  const config = JSON.parse(configFile);

  // open default themes file
  const themesFile = await readFile('utils/init/themes.json', 'utf8');
  const { themes } = JSON.parse(themesFile);

  // find theme
  const theme = themes.find((t) => t.name === config.defaultTheme);

  if (theme) {
    // save theme in new format
    // PAB - primary;accent;background
    const { primary: p, accent: a, background: b, primary_rgb: pr, accent_rgb: ar, background_rgb: br } = theme.colors;
    const normalizedTheme = `${p};${a};${b};${pr};${ar};${br}`;

    await writeFile(
      'data/config.json',
      JSON.stringify({ ...config, defaultTheme: normalizedTheme })
    );
  }
};

module.exports = normalizeTheme;
