const fullImageManifest = Array.isArray(window.relitLiveAssetManifest)
  ? window.relitLiveAssetManifest
  : [];

const featuredGalleryGroups = [
  'human_videos_2_011',
  'human_movies_human_13',
  'human_movies_human_15',
  'human_movies_human_16',
  'human_movies_science_fiction_3',
  'human_movies_metal_7',
  'human_videos_006',
  'human_videos_013',
  'human_videos_014',
  'human_videos_018'
];

const preferredBackgroundVariants = [
  'daytime',
  'pink_sunrise',
  'landiao_right_m',
  'sunny_vondelpark',
  'white_point_light',
  'red-blue_blaze_2'
];

const maxBackgroundVariantsPerBase = 6;
const heroShowcasePlaybackTilesPerRow = 8;
const heroShowcaseVisiblePlaybackPerRow = 2;
const imageLoadState = new Map();
const packagedLightMode = true;

const imageSceneDefinitions = [
  {
    id: 'science-fiction-3',
    name: 'image 1',
    description: '',
    input: 'pr_images/human_movies_science_fiction_3_0.jpg',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm sunrise tones soften the scene while preserving its cinematic materials and contrast.',
        image: 'pr_images/human_movies_science_fiction_3_0_Pink_Sunrise.jpg'
      },
      {
        label: 'Daytime',
        description: 'Neutral daylight brightens the frame while keeping material detail clear and readable.',
        image: 'pr_images/human_movies_science_fiction_3_0_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A cinematic key light from the left introduces stronger modeling and studio-like contrast.',
        image: 'pr_images/human_movies_science_fiction_3_0_movie_white_left.jpg'
      },
      {
        label: 'Blue Mood',
        description: 'A cool blue ambience from the right adds a stylized science-fiction mood to the scene.',
        image: 'pr_images/human_movies_science_fiction_3_0_landiao_right_m.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated point source makes local shading changes and specular structure easier to read.',
        image: 'pr_images/human_movies_science_fiction_3_0_white_point_light.jpg'
      }
    ]
  },
  {
    id: 'video-014-image',
    name: 'image 2',
    description: 'A longer in-the-wild image example with broad lighting coverage, useful for comparing natural and cinematic illumination changes.',
    input: 'pr_images/human_videos_014_0.jpg',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm sunrise tones shift the overall ambience while keeping the subject structure readable.',
        image: 'pr_images/human_videos_014_0_Pink_Sunrise.jpg'
      },
      {
        label: 'Daytime',
        description: 'Daylight produces a neutral relighting result with a stable overall appearance.',
        image: 'pr_images/human_videos_014_0_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A left-side cinematic key light adds stronger facial modeling and directional shading.',
        image: 'pr_images/human_videos_014_0_movie_white_left.jpg'
      },
      {
        label: 'Blue Mood',
        description: 'A blue-toned atmosphere from the right keeps the scene stable while creating a cooler cinematic mood.',
        image: 'pr_images/human_videos_014_0_landiao_right_m.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated point source emphasizes local shading transitions and small highlight changes.',
        image: 'pr_images/human_videos_014_0_white_point_light.jpg'
      }
    ]
  },
  {
    id: 'metal-7',
    name: 'image 3',
    description: 'A reflective portrait shot where directional lighting changes and material response are easy to compare.',
    input: 'pr_images/human_movies_metal_7_0.jpg',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm environment lighting shifts the tone while preserving reflective material detail.',
        image: 'pr_images/human_movies_metal_7_0_Pink_Sunrise.jpg'
      },
      {
        label: 'Daytime',
        description: 'The daylight variant brightens the scene while keeping the overall appearance natural.',
        image: 'pr_images/human_movies_metal_7_0_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A film-style left key light makes the facial and material shading more directional.',
        image: 'pr_images/human_movies_metal_7_0_movie_white_left.jpg'
      },
      {
        label: 'Blue Mood',
        description: 'A cool blue ambience from the right emphasizes reflective response under stylized lighting.',
        image: 'pr_images/human_movies_metal_7_0_landiao_right_m.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated point source makes local highlights and reflective response easier to inspect.',
        image: 'pr_images/human_movies_metal_7_0_white_point_light.jpg'
      }
    ]
  },
  {
    id: 'video-013-image',
    name: 'image 4',
    description: 'A motion-heavy image example that is useful for comparing lighting behavior on a dynamic capture.',
    input: 'pr_images/human_videos_013_0.jpg',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm sunrise tones shift the global ambience while keeping the moving subject readable.',
        image: 'pr_images/human_videos_013_0_Pink_Sunrise.jpg'
      },
      {
        label: 'Daytime',
        description: 'The daylight result keeps dynamic content stable without visible flashing.',
        image: 'pr_images/human_videos_013_0_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A movie-style left key light introduces stronger directional contrast without disrupting temporal stability.',
        image: 'pr_images/human_videos_013_0_movie_white_left.jpg'
      },
      {
        label: 'Blue Mood',
        description: 'A blue right-side ambience creates a cooler low-light look while maintaining temporal stability.',
        image: 'pr_images/human_videos_013_0_landiao_right_m.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated target light highlights local shading and small appearance changes.',
        image: 'pr_images/human_videos_013_0_white_point_light.jpg'
      }
    ]
  }
];

const videoSceneDefinitions = [
  {
    id: 'video-human-16',
    name: 'video 1',
    description: 'A character-centric movie clip with a shorter source sequence, useful for inspecting whether relit outputs stay synchronized with the original motion.',
    input: 'pr_images/human_movies_human_16_0.jpg',
    inputVideoPath: 'pr_videos/human_movies_human_16.0.mp4',
    lights: [
      {
        label: 'Daytime',
        description: 'Neutral daylight makes it easy to inspect whether the relit clip remains aligned with the shorter source motion.',
        image: 'pr_images/human_movies_human_16_0_Daytime.jpg',
        videoPath: 'assets/videos/showcase/human_movies_human_16.0_Daytime_trimmed.mp4'
      },
      {
        label: 'Vintage Amber Film',
        description: 'A warm vintage amber tone gives the relit clip a faded old-film mood while keeping it aligned with the source motion.',
        image: 'pr_images/human_movies_human_16_0_frame_001710.jpg',
        videoPath: 'pr_videos/human_movies_human_16.0_frame_001710.mp4'
      },
      {
        label: 'Blue Side',
        description: 'A cool side light produces a stylized low-key result while matching the original clip length.',
        image: 'pr_images/human_movies_human_16_0_landiao_right_s.jpg',
        videoPath: 'assets/videos/showcase/human_movies_human_16.0_landiao_right_s_trimmed.mp4'
      }
    ]
  },
  {
    id: 'video-metal-4',
    name: 'video 2',
    description: 'A reflective performance clip that exposes whether specular response remains temporally stable under strong illumination changes.',
    input: 'pr_images/human_movies_metal_4_2.jpg',
    inputVideoPath: 'pr_videos/human_movies_metal_4.2.mp4',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm sunrise tones shift the metallic response while keeping reflections coherent over time.',
        image: 'pr_images/human_movies_metal_4_2_Pink_Sunrise.jpg'
      },
      {
        label: 'Daytime',
        description: 'Daylight reveals more neutral material behavior and makes temporal consistency easier to inspect.',
        image: 'pr_images/human_movies_metal_4_2_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A cinematic key light introduces stronger contrast and reflective structure without breaking stability.',
        image: 'pr_images/human_movies_metal_4_2_movie_white_left.jpg'
      }
    ]
  },
  {
    id: 'video-013-1',
    name: 'video 3',
    description: 'A motion-heavy in-the-wild clip that is useful for checking whether illumination changes stay stable through articulated motion.',
    input: 'pr_images/human_videos_013_1.jpg',
    inputVideoPath: 'pr_videos/human_videos_013.1.mp4',
    lights: [
      {
        label: 'Daytime',
        description: 'Daylight relighting keeps the sequence neutral while preserving motion continuity.',
        image: 'pr_images/human_videos_013_1_Daytime.jpg'
      },
      {
        label: 'Movie White Left',
        description: 'A side key light adds stronger modeling without introducing visible temporal jitter.',
        image: 'pr_images/human_videos_013_1_movie_white_left.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated point light makes local highlight motion and shading consistency easier to compare.',
        image: 'pr_images/human_videos_013_1_white_point_light.jpg'
      }
    ]
  },
  {
    id: 'video-009-2',
    name: 'video 4',
    description: '',
    input: 'pr_images/human_videos_009_2.jpg',
    inputVideoPath: 'pr_videos/human_videos_009.2.mp4',
    lights: [
      {
        label: 'Pink Sunrise',
        description: 'Warm relighting changes the sequence mood while keeping frame-to-frame transitions coherent.',
        image: 'pr_images/human_videos_009_2_Pink_Sunrise.jpg'
      },
      {
        label: 'Street Lamp',
        description: 'A localized street-lamp illumination creates a stronger night-time look without visible flicker.',
        image: 'pr_images/human_videos_009_2_Street_Lamp.jpg'
      },
      {
        label: 'White Point Light',
        description: 'A concentrated point light reveals local lighting effects and temporal consistency together.',
        image: 'pr_images/human_videos_009_2_white_point_light.jpg'
      }
    ]
  },
  {
    id: 'video-018-0',
    name: 'video 5',
    description: 'A stylized clip with stronger directional lighting options, useful for showcasing cinematic relighting on a new motion pattern.',
    input: 'pr_images/human_videos_018_0.jpg',
    inputVideoPath: 'pr_videos/human_videos_018.0.mp4',
    lights: [
      {
        label: 'Movie White Left',
        description: 'A neutral cinematic key light improves subject modeling while preserving motion continuity.',
        image: 'pr_images/human_videos_018_0_movie_white_left.jpg'
      },
      {
        label: 'Movie Yellow Left',
        description: 'A warmer cinematic key light changes the scene mood while keeping the relit clip stable over time.',
        image: 'pr_images/human_videos_018_0_movie_yellow_left.jpg'
      },
      {
        label: 'Blue Front',
        description: 'A cooler front-facing light provides a stylized alternative with clearly readable temporal consistency.',
        image: 'pr_images/human_videos_018_0_landiao_front.jpg'
      }
    ]
  }
];

const backgroundGrid = document.getElementById('background-grid');
const heroShowcaseGrid = document.getElementById('hero-showcase-grid');

let orderedBackgroundImages = [];
let orderedHeroShowcasePanes = [];
let framePlaybackIntervalId = null;
const usingLocalFileProtocol = window.location.protocol === 'file:';

function getExplorerElements(prefix) {
  return {
    sceneList: document.getElementById(`${prefix}-scene-list`),
    lightingControls: document.getElementById(`${prefix}-lighting-controls`),
    inputImage: document.getElementById(`${prefix}-input-image`),
    resultImage: document.getElementById(`${prefix}-result-image`),
    inputVideo: document.getElementById(`${prefix}-input-video`),
    resultVideo: document.getElementById(`${prefix}-result-video`),
    sceneDescription: document.getElementById(`${prefix}-scene-description`),
    lightingDescription: document.getElementById(`${prefix}-lighting-description`),
    helperNote: document.getElementById(`${prefix}-media-note`),
    compareStage: document.getElementById(`${prefix}-compare-stage`),
    compareSlider: document.getElementById(`${prefix}-compare-slider`)
  };
}

function createExplorerController(options) {
  return {
    ...options,
    scenes: [],
    activeSceneId: null,
    activeLightLabel: null,
    compareValue: 50
  };
}

const explorers = [
  createExplorerController({
    name: 'image',
    sceneDefinitions: imageSceneDefinitions,
    requireVideo: false,
    preferredMode: 'image',
    emptySceneMessage: 'No valid image showcase assets are currently available in the pr_images folder.',
    emptyLightingMessage: 'The page is still using any remaining valid images for the background and homepage showcase.',
    ...getExplorerElements('image')
  }),
  createExplorerController({
    name: 'video',
    sceneDefinitions: videoSceneDefinitions,
    requireVideo: true,
    preferredMode: 'video',
    emptySceneMessage: 'No valid video showcase assets are currently available in the pr_videos folder.',
    emptyLightingMessage: 'The video showcase expects matching input and relit MP4 files for each selected lighting setup.',
    ...getExplorerElements('video')
  })
];

function getFileName(imagePath) {
  return imagePath.split('/').pop() || imagePath;
}

function isGalleryCandidate(imagePath) {
  const fileName = getFileName(imagePath);
  return /\.jpg$/i.test(fileName) && !/_frame_\d+\.jpg$/i.test(fileName);
}

function parseImageOrdering(imagePath) {
  const fileName = getFileName(imagePath);
  const normalizedFileName = fileName.replace(/\.jpg$/i, '');
  const originalMatch = normalizedFileName.match(/^(.*)_(\d)$/);

  if (originalMatch) {
    return {
      groupId: originalMatch[1],
      sampleIndex: Number.parseInt(originalMatch[2], 10),
      baseKey: normalizedFileName,
      variantRank: 0,
      variantName: '',
      imagePath
    };
  }

  const nameParts = normalizedFileName.split('_');
  let bestMatch = null;

  for (let index = nameParts.length - 1; index >= 1; index -= 1) {
    const token = nameParts[index];
    if (!/^\d+$/.test(token)) {
      continue;
    }

    const testId = nameParts.slice(0, index).join('_');
    const variantRaw = nameParts.slice(index + 1).join('_');
    if (!testId || !variantRaw || !/[a-z]/i.test(variantRaw)) {
      continue;
    }

    bestMatch = {
      testId,
      sampleIndexRaw: token,
      variantRaw
    };
    break;
  }

  if (!bestMatch) {
    return null;
  }

  return {
    groupId: bestMatch.testId,
    sampleIndex: Number.parseInt(bestMatch.sampleIndexRaw, 10),
    baseKey: `${bestMatch.testId}_${bestMatch.sampleIndexRaw}`,
    variantRank: 1,
    variantName: bestMatch.variantRaw.toLowerCase(),
    imagePath
  };
}

function sortParsedImages(parsedImages) {
  return [...parsedImages].sort((left, right) => {
    if (left.groupId !== right.groupId) {
      return left.groupId.localeCompare(right.groupId);
    }

    if (left.sampleIndex !== right.sampleIndex) {
      return left.sampleIndex - right.sampleIndex;
    }

    if (left.variantRank !== right.variantRank) {
      return left.variantRank - right.variantRank;
    }

    return left.variantName.localeCompare(right.variantName);
  });
}

function buildBackgroundSelection(parsedImages) {
  const parsedByBaseKey = new Map();

  parsedImages.forEach((imageInfo) => {
    if (!parsedByBaseKey.has(imageInfo.baseKey)) {
      parsedByBaseKey.set(imageInfo.baseKey, []);
    }

    parsedByBaseKey.get(imageInfo.baseKey).push(imageInfo);
  });

  const selectedImagePaths = [];

  [...parsedByBaseKey.values()]
    .map((items) => sortParsedImages(items))
    .sort((left, right) => {
      const leftKey = left[0]?.baseKey || '';
      const rightKey = right[0]?.baseKey || '';
      return leftKey.localeCompare(rightKey);
    })
    .forEach((items) => {
      const selectedForBase = new Set();
      const original = items.find((item) => item.variantRank === 0);

      if (original) {
        selectedForBase.add(original.imagePath);
      }

      preferredBackgroundVariants.forEach((variantName) => {
        const match = items.find((item) => item.variantName === variantName);
        if (match) {
          selectedForBase.add(match.imagePath);
        }
      });

      items.forEach((item) => {
        if (selectedForBase.size >= maxBackgroundVariantsPerBase) {
          return;
        }

        selectedForBase.add(item.imagePath);
      });

      selectedImagePaths.push(...selectedForBase);
    });

  return selectedImagePaths;
}

function groupHeroShowcasePanes(parsedImages) {
  const paneMap = new Map();

  sortParsedImages(parsedImages).forEach((imageInfo) => {
    const paneKey = `${imageInfo.groupId}::${imageInfo.variantName || '__original__'}`;
    if (!paneMap.has(paneKey)) {
      paneMap.set(paneKey, {
        paneKey,
        groupId: imageInfo.groupId,
        variantName: imageInfo.variantName,
        variantRank: imageInfo.variantRank,
        frames: []
      });
    }

    paneMap.get(paneKey).frames.push({
      imagePath: imageInfo.imagePath,
      sampleIndex: imageInfo.sampleIndex
    });
  });

  return [...paneMap.values()]
    .map((pane) => ({
      ...pane,
      frames: pane.frames
        .sort((left, right) => left.sampleIndex - right.sampleIndex)
        .map((frame) => frame.imagePath)
    }))
    .sort((left, right) => {
      if (left.groupId !== right.groupId) {
        return left.groupId.localeCompare(right.groupId);
      }

      if (left.variantRank !== right.variantRank) {
        return left.variantRank - right.variantRank;
      }

      return left.variantName.localeCompare(right.variantName);
    });
}

function canLoadImage(imagePath) {
  if (!imageLoadState.has(imagePath)) {
    imageLoadState.set(
      imagePath,
      new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = imagePath;
      })
    );
  }

  return imageLoadState.get(imagePath);
}

function canLoadVideo(videoPath) {
  if (!videoPath) {
    return Promise.resolve(false);
  }

  if (!imageLoadState.has(videoPath)) {
    imageLoadState.set(
      videoPath,
      new Promise((resolve) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => resolve(true);
        video.onerror = () => resolve(false);
        video.src = videoPath;
      })
    );
  }

  return imageLoadState.get(videoPath);
}

function getVideoInputPathFromImage(imagePath) {
  const fileName = getFileName(imagePath).replace(/\.jpg$/i, '');
  const match = fileName.match(/^(.*)_(\d)$/);

  if (!match) {
    return null;
  }

  return `pr_videos/${match[1]}.${match[2]}.mp4`;
}

function getVideoRelitPathFromImage(imagePath) {
  const fileName = getFileName(imagePath).replace(/\.jpg$/i, '');
  const match = fileName.match(/^(.*)_(\d)_(.+)$/);

  if (!match) {
    return null;
  }

  return `pr_videos/${match[1]}.${match[2]}_${match[3]}.mp4`;
}

async function filterExistingImagePaths(imagePaths) {
  if (packagedLightMode) {
    return imagePaths;
  }

  const results = await Promise.all(
    imagePaths.map(async (imagePath) => ((await canLoadImage(imagePath)) ? imagePath : null))
  );

  return results.filter(Boolean);
}

async function filterExistingShowcasePanes(panes) {
  if (packagedLightMode) {
    return panes;
  }

  const filteredPanes = [];

  for (const pane of panes) {
    const frames = await filterExistingImagePaths(pane.frames);
    if (!frames.length) {
      continue;
    }

    filteredPanes.push({
      ...pane,
      frames
    });
  }

  return filteredPanes;
}

async function prepareGalleryAssets() {
  const parsedImages = fullImageManifest
    .filter((imagePath) => isGalleryCandidate(imagePath))
    .map((imagePath) => parseImageOrdering(imagePath))
    .filter(Boolean)
    .filter((imageInfo) => featuredGalleryGroups.includes(imageInfo.groupId));

  const backgroundCandidates = buildBackgroundSelection(parsedImages);
  const heroShowcaseCandidates = groupHeroShowcasePanes(parsedImages);

  const backgroundImages = await filterExistingImagePaths(backgroundCandidates);
  const heroShowcasePanes = await filterExistingShowcasePanes(heroShowcaseCandidates);

  return {
    backgroundImages,
    heroShowcasePanes
  };
}

async function prepareScenes(definitions, options = {}) {
  const { requireVideo = false } = options;
  const validScenes = [];

  for (const scene of definitions) {
    if (!packagedLightMode && !(await canLoadImage(scene.input))) {
      continue;
    }

    const inputVideoPath = scene.inputVideoPath || getVideoInputPathFromImage(scene.input);
    const hasInputVideo = packagedLightMode ? Boolean(inputVideoPath) : await canLoadVideo(inputVideoPath);

    if (requireVideo && !hasInputVideo) {
      continue;
    }

    const validLights = [];
    for (const light of scene.lights) {
      if (packagedLightMode || await canLoadImage(light.image)) {
        const lightVideoPath = light.videoPath || getVideoRelitPathFromImage(light.image);
        const hasLightVideo = packagedLightMode ? Boolean(lightVideoPath) : await canLoadVideo(lightVideoPath);

        if (requireVideo && !hasLightVideo) {
          continue;
        }

        validLights.push({
          ...light,
          video: hasLightVideo ? lightVideoPath : null
        });
      }
    }

    if (!validLights.length) {
      continue;
    }

    validScenes.push({
      ...scene,
      inputVideo: hasInputVideo ? inputVideoPath : null,
      lights: validLights
    });
  }

  return validScenes;
}

function buildScrollingGallery(container, options) {
  if (!container) {
    return;
  }

  const {
    items,
    rowCount,
    duplicateCount,
    rowClass,
    trackClass,
    tileClass,
    groupedPlayback
  } = options;

  container.innerHTML = '';

  if (!items.length) {
    return;
  }

  const groupedItemsByRow = groupedPlayback
    ? distributeHeroShowcaseItemsByRow(items, rowCount)
    : null;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = document.createElement('div');
    row.className = rowClass;

    const track = document.createElement('div');
    track.className = trackClass;
    track.dataset.speed = rowIndex % 3 === 0 ? 'slow' : rowIndex % 3 === 1 ? 'normal' : 'fast';
    track.style.animationDelay = groupedPlayback ? '0s' : `${rowIndex * -4.6}s`;

    const orderedItems = groupedPlayback
      ? groupedItemsByRow[rowIndex] || items
      : items.slice((rowIndex * 5) % items.length).concat(items.slice(0, (rowIndex * 5) % items.length));

    for (let repeatIndex = 0; repeatIndex < duplicateCount; repeatIndex += 1) {
      const playbackStride = groupedPlayback
        ? Math.max(1, Math.ceil(orderedItems.length / heroShowcasePlaybackTilesPerRow))
        : 1;

      orderedItems.forEach((item, itemIndex) => {
        const tile = document.createElement('div');
        tile.className = tileClass;

        if (groupedPlayback && item.variantRank === 0) {
          tile.classList.add('hero-showcase-original-tile');
          tile.dataset.paneType = 'original';
        }

        const img = document.createElement('img');
        const initialFrameIndex = groupedPlayback ? 0 : 0;

        img.src = groupedPlayback ? item.frames[initialFrameIndex] : item;
        img.alt = '';

        if (groupedPlayback) {
          const shouldAnimateTile = item.frames.length > 1
            && (itemIndex + repeatIndex * Math.max(1, Math.floor(playbackStride / 2))) % playbackStride === rowIndex % playbackStride;

          img.className = shouldAnimateTile ? 'scrolling-gallery-frame' : 'scrolling-gallery-frame static-frame';
          img.dataset.frames = JSON.stringify(item.frames);
          img.dataset.frameIndex = String(initialFrameIndex);

          if (shouldAnimateTile) {
            img.dataset.playbackEnabled = 'true';
          }
        }

        tile.appendChild(img);
        track.appendChild(tile);
      });
    }

    row.appendChild(track);
    container.appendChild(row);
  }
}

function distributeHeroShowcaseItemsByRow(items, rowCount) {
  const groupStartIndices = [];
  let previousGroupId = null;

  items.forEach((item, index) => {
    if (item.groupId !== previousGroupId) {
      groupStartIndices.push(index);
      previousGroupId = item.groupId;
    }
  });

  if (!groupStartIndices.length) {
    return Array.from({ length: rowCount }, () => items);
  }

  const groupStep = Math.max(1, Math.floor(groupStartIndices.length / rowCount));

  return Array.from({ length: rowCount }, (_, rowIndex) => {
    const startIndex = groupStartIndices[(rowIndex * groupStep) % groupStartIndices.length];
    return items.slice(startIndex).concat(items.slice(0, startIndex));
  });
}

function startTileFramePlayback() {
  if (framePlaybackIntervalId) {
    window.clearInterval(framePlaybackIntervalId);
  }

  if (!orderedHeroShowcasePanes.length) {
    framePlaybackIntervalId = null;
    return;
  }

  framePlaybackIntervalId = window.setInterval(() => {
    const frames = getVisibleHeroShowcaseFrames();

    frames.forEach((frameElement) => {
      const framePaths = JSON.parse(frameElement.dataset.frames || '[]');
      if (framePaths.length <= 1) {
        return;
      }

      const currentIndex = Number.parseInt(frameElement.dataset.frameIndex || '0', 10);
      const nextIndex = (currentIndex + 1) % framePaths.length;

      frameElement.style.opacity = '0.7';

      window.setTimeout(() => {
        frameElement.src = framePaths[nextIndex];
        frameElement.dataset.frameIndex = String(nextIndex);
        frameElement.style.opacity = '1';
      }, 120);
    });
  }, 1150);
}

function getVisibleHeroShowcaseFrames() {
  if (!heroShowcaseGrid) {
    return [];
  }

  const showcaseWindow = heroShowcaseGrid.closest('.hero-showcase-window');
  const showcaseRect = showcaseWindow?.getBoundingClientRect();

  if (!showcaseRect) {
    return [];
  }

  return Array.from(heroShowcaseGrid.querySelectorAll('.hero-showcase-row')).flatMap((row) => {
    return Array.from(row.querySelectorAll('.scrolling-gallery-frame'))
      .filter((frameElement) => {
        const framePaths = JSON.parse(frameElement.dataset.frames || '[]');
        if (framePaths.length <= 1) {
          return false;
        }

        const rect = frameElement.getBoundingClientRect();
        return rect.right > showcaseRect.left
          && rect.left < showcaseRect.right
          && rect.bottom > showcaseRect.top
          && rect.top < showcaseRect.bottom;
      })
      .slice(0, heroShowcaseVisiblePlaybackPerRow);
  });
}

function buildBackgroundGallery() {
  buildScrollingGallery(backgroundGrid, {
    items: orderedBackgroundImages,
    rowCount: window.innerWidth <= 720 ? 4 : window.innerWidth <= 1080 ? 5 : 6,
    duplicateCount: 2,
    rowClass: 'background-row',
    trackClass: 'background-track',
    tileClass: 'background-tile',
    groupedPlayback: false
  });
}

function buildHeroShowcaseGallery() {
  buildScrollingGallery(heroShowcaseGrid, {
    items: orderedHeroShowcasePanes,
    rowCount: 4,
    duplicateCount: 2,
    rowClass: 'hero-showcase-row',
    trackClass: 'hero-showcase-track',
    tileClass: 'hero-showcase-tile',
    groupedPlayback: true
  });
}

function pauseAndResetVideo(videoElement) {
  if (!videoElement) {
    return;
  }

  videoElement.pause();
  videoElement.removeAttribute('src');
  videoElement.load();
}

function updateCompareStage(explorer) {
  if (!explorer.compareStage) {
    return;
  }

  if (explorer.compareSlider) {
    explorer.compareSlider.value = String(explorer.compareValue);
  }

  explorer.compareStage.style.setProperty('--compare-position', `${explorer.compareValue}%`);
}

function renderEmptyExplorer(explorer) {
  if (explorer.sceneList) {
    explorer.sceneList.innerHTML = '';
  }

  if (explorer.lightingControls) {
    explorer.lightingControls.innerHTML = '';
  }

  if (explorer.helperNote) {
    explorer.helperNote.textContent = '';
  }

  if (explorer.inputImage) {
    explorer.inputImage.removeAttribute('src');
    explorer.inputImage.alt = 'No valid input image available';
  }

  if (explorer.resultImage) {
    explorer.resultImage.removeAttribute('src');
    explorer.resultImage.alt = 'No valid relit result available';
  }

  updateCompareStage(explorer);

  if (explorer.inputImage?.parentElement) {
    explorer.inputImage.parentElement.classList.remove('media-video');
  }

  if (explorer.resultImage?.parentElement) {
    explorer.resultImage.parentElement.classList.remove('media-video');
  }

  pauseAndResetVideo(explorer.inputVideo);
  pauseAndResetVideo(explorer.resultVideo);

  if (explorer.sceneDescription) {
    explorer.sceneDescription.textContent = explorer.emptySceneMessage;
  }

  if (explorer.lightingDescription) {
    explorer.lightingDescription.textContent = explorer.emptyLightingMessage;
  }
}

function renderSceneButtons(explorer) {
  if (!explorer.sceneList) {
    return;
  }

  explorer.sceneList.innerHTML = '';

  explorer.scenes.forEach((scene) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `scene-button${scene.id === explorer.activeSceneId ? ' active' : ''}`;
    button.innerHTML = `<strong>${scene.name}</strong>`;
    button.addEventListener('click', () => {
      explorer.activeSceneId = scene.id;
      explorer.activeLightLabel = scene.lights[0].label;
      renderExplorer(explorer);
    });
    explorer.sceneList.appendChild(button);
  });
}

function renderLightButtons(explorer, scene) {
  if (!explorer.lightingControls) {
    return;
  }

  explorer.lightingControls.innerHTML = '';

  scene.lights.forEach((light) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `light-button${light.label === explorer.activeLightLabel ? ' active' : ''}`;
    button.textContent = light.label;
    button.addEventListener('click', () => {
      explorer.activeLightLabel = light.label;
      renderExplorer(explorer);
    });
    explorer.lightingControls.appendChild(button);
  });
}

function renderExplorer(explorer) {
  if (!explorer.scenes.length || !explorer.activeSceneId) {
    renderEmptyExplorer(explorer);
    return;
  }

  const scene = explorer.scenes.find((item) => item.id === explorer.activeSceneId) || explorer.scenes[0];
  const light = scene.lights.find((item) => item.label === explorer.activeLightLabel) || scene.lights[0];
  const hasVideoPair = Boolean(scene.inputVideo && light.video && explorer.inputVideo && explorer.resultVideo);
  const useVideoMode = explorer.preferredMode === 'video' && hasVideoPair;

  if (explorer.inputImage?.parentElement) {
    explorer.inputImage.parentElement.classList.toggle('media-video', useVideoMode);
  }

  if (explorer.resultImage?.parentElement) {
    explorer.resultImage.parentElement.classList.toggle('media-video', useVideoMode);
  }

  if (useVideoMode) {
    pauseAndResetVideo(explorer.inputVideo);
    pauseAndResetVideo(explorer.resultVideo);

    explorer.inputVideo.src = scene.inputVideo;
    explorer.resultVideo.src = light.video;
    explorer.inputVideo.load();
    explorer.resultVideo.load();
    explorer.inputVideo.play().catch(() => {});
    explorer.resultVideo.play().catch(() => {});
  } else {
    pauseAndResetVideo(explorer.inputVideo);
    pauseAndResetVideo(explorer.resultVideo);

    if (explorer.inputImage) {
      explorer.inputImage.src = scene.input;
      explorer.inputImage.alt = `${scene.name} input image`;
    }

    if (explorer.resultImage) {
      explorer.resultImage.src = light.image;
      explorer.resultImage.alt = `${scene.name} relit with ${light.label}`;
    }
  }

  if (explorer.helperNote) {
    if (explorer.preferredMode === 'video' && !hasVideoPair) {
      explorer.helperNote.textContent = 'The selected video pair is unavailable, so the showcase falls back to the corresponding still frames.';
    } else {
      explorer.helperNote.textContent = '';
    }
  }

  if (explorer.sceneDescription) {
    explorer.sceneDescription.textContent = '';
  }

  if (explorer.lightingDescription) {
    explorer.lightingDescription.textContent = '';
  }

  renderSceneButtons(explorer);
  renderLightButtons(explorer, scene);
}

window.addEventListener('resize', () => {
  buildBackgroundGallery();
  buildHeroShowcaseGallery();
  startTileFramePlayback();
});

async function initializePage() {
  const galleryAssets = await prepareGalleryAssets();
  orderedBackgroundImages = galleryAssets.backgroundImages;
  orderedHeroShowcasePanes = galleryAssets.heroShowcasePanes;
  await Promise.all(
    explorers.map(async (explorer) => {
      explorer.scenes = await prepareScenes(explorer.sceneDefinitions, {
        requireVideo: explorer.requireVideo
      });

      if (explorer.scenes.length) {
        explorer.activeSceneId = explorer.scenes[0].id;
        explorer.activeLightLabel = explorer.scenes[0].lights[0].label;
      }
    })
  );

  buildBackgroundGallery();
  buildHeroShowcaseGallery();
  startTileFramePlayback();

  explorers.forEach((explorer) => {
    if (!explorer.compareSlider) {
      return;
    }

    explorer.compareSlider.value = String(explorer.compareValue);
    updateCompareStage(explorer);
    explorer.compareSlider.addEventListener('input', (event) => {
      explorer.compareValue = Number.parseInt(event.target.value, 10);
      updateCompareStage(explorer);
    });
  });

  explorers.forEach(renderExplorer);
}

initializePage();