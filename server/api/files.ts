import { defineEventHandler } from "h3";
import { FirebaseService } from "~/server/services/firebase.service";

export default defineEventHandler(() => FirebaseService.getResumeFilepath());
