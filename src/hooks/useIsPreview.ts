import {useEffect, useMemo, useState} from "react";

const useIsPreview = (): boolean => {
  // Try to get an accurate value for preview at start to avoid showing page rendered
  // as no-preview and then a second later change to preview
  const defaultPreview = useMemo(() => {
    if (!window) return false;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("preview") === "true"
  }, [])
  const [isPreview, setIsPreview] = useState(defaultPreview)

  useEffect(() => {
    if (!window) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("preview") === "true") {
      setIsPreview(true)
    }
  }, []);

  return isPreview;
};

export default useIsPreview