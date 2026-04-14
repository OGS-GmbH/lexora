type _TouchByPathState = Record<string, unknown>;

function touchByPath(data: unknown, path: string[]): unknown {
  let item: _TouchByPathState = data as _TouchByPathState;

  for (const pathItem of path) item = item[pathItem] as _TouchByPathState;

  return item;
}

export { touchByPath };
