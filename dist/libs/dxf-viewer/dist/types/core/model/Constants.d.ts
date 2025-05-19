import * as THREE from "three";
import type { DxfData } from "../../core/dxf";
import type { PdfData } from "../../core/viewers";
/**
 * Loaded 2d model info for Viewer2d.
 */
export interface ModelData2d {
    /**
     * modelId that is unique for loaded models
     */
    modelId: string;
    /**
     * Used for dxf data.
     */
    dxfData?: DxfData;
    /**
     * Used for pdf data.
     */
    pdfData?: PdfData;
    /**
     * Model space transform matrix.
     * @internal
     */
    msTransformMatrix?: THREE.Matrix4;
}
