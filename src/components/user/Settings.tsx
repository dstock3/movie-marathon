import { SettingsProps } from "../../Types.types"
import '../../style/settings.css'
import { useState } from 'react';

const Settings = (props: SettingsProps) => {
  const [theme, setTheme] = useState<string | undefined>(props.thisUser?.theme);
  const [collectMetadata, setCollectMetadata] = useState<boolean | undefined>(props.thisUser?.metadataIsAllowed);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTheme(theme);
    setCollectMetadata(collectMetadata);
  };

  return (
    <div className="settings-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Settings</legend>
          <label htmlFor="theme-select">Select a theme:</label>
          <select id="theme-select" value={theme} onChange={(event) => setTheme(event.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="dark">Midnight</option>
            <option value="dark">Mint</option>
          </select>
          <br />
          <label htmlFor="metadata-toggle">Allow collection of metadata:</label>
          <input
            type="checkbox"
            id="metadata-toggle"
            checked={collectMetadata}
            onChange={(event) => setCollectMetadata(event.target.checked)}
          />
          <br />
          <button type="submit">Update Settings</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Settings
